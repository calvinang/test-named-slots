import { Component, Prop } from "@stencil/core";
import "./template.component";

@Component({
  tag: "app-consuming-component",
  styleUrl: "./sass/k12-template.scss"
})
export class ConsumingComponent {
  @Prop()
  data: string;

  constructor() {}

  render() {
    return (
      <app-template>
        <p slot="slot1">Slot1</p>
        <p slot="slot2">Slot2</p>
        <thead slot="tableHeader">
          <tr>
            <th>Header</th>
          </tr>
        </thead>
        <tbody slot="tableBody">
          <tr>
            <td>Data Cell</td>
          </tr>
        </tbody>
      </app-template>
    );
  }
}
