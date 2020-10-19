import { Room, Client } from "colyseus";
import { MyRoomState, Player } from "./schema/MyRoomState";

export class MyRoom extends Room<MyRoomState> {

  onCreate (options: any) {
    this.setState(new MyRoomState());

    this.state.players.set("one", new Player());
    this.state.players.set("two", new Player());
  }

  onJoin (client: Client, options: any) {
    this.state.players.set(client.sessionId, new Player());
    console.log("JOINED!");

    this.clock.setTimeout(() => {
      console.log("WILL MUTATE!");
      this.state.players.get(client.sessionId).hand.cards[0].isSelected = true;
    }, 1000);
  }

  onLeave (client: Client, consented: boolean) {
  }

  onDispose() {
  }

}
