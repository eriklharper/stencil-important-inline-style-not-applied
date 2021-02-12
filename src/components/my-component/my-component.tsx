import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
})
export class MyComponent {
  render() {
    return <input style={{ opacity: "0 !important" }}></input>;
  }
}
