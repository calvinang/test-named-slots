import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-template',
  styleUrl: './sass/k12-template.scss'
})
export class TemplateComponent {
  @Prop()
  data: string;

  constructor() {}

  render() {
    return (
      <div>
      <div class="k12-template">
        <p>{this.data}</p>
        <slot name="slot1"/>
        <slot name="slot2"/>
      </div>

      <div>
        <table id="testTable">
          <slot name="tableheader"/>
          <slot name="tablebody"/>
        </table>
      </div>
      </div>
    );
  }
}
