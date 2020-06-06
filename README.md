# {{query-selector}} helper

Returns the first element within the document that matches the specified selector. It's a great companion to Ember's `{{in-element}}` helper.

## Installation

```
ember install ember-query-selector-helper
```

## Usage

```handlebars
<div id="modal-portal"></div>

{{#in-element (query-selector "#modal-portal")}}
  <Modal />
{{/in-element}}
```

```handlebars
{{#let (query-selector "#modal-portal" strict=false) as |portal|}}
  {{#if portal}}
    {{#in-element portal}}
      <Modal />
    {{/in-element}}
  {{else}}
    <Modal />
  {{/if}}
{{/let}}
```

## Compatibility

- Ember.js v3.12 or above
- Ember CLI v2.13 or above
- Node.js v10 or above

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
