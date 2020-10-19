import { Client } from "colyseus";
import { Schema, type, filterChildren } from "@colyseus/schema";

export class Card extends Schema {
  @type("number") n: number;
  @type("boolean") isSelected: boolean;
}

export class Hand extends Schema {
  @filterChildren(function (client: Client, key: string, value: Card, root: MyRoomState) {
    return root.players.get(client.sessionId).hand === this
  })
  @type([Card]) cards: Card[] = [
    (new Card()).assign({ n: 1, isSelected: false }),
    (new Card()).assign({ n: 2, isSelected: false }),
    (new Card()).assign({ n: 3, isSelected: false }),
    (new Card()).assign({ n: 4, isSelected: false }),
    (new Card()).assign({ n: 5, isSelected: false }),
  ];
}

export class Player extends Schema {
  @type(Hand) hand = new Hand();
}

export class MyRoomState extends Schema {
  @type({ map: Player }) players: Map<string, Player> = new Map<string, Player>();
}