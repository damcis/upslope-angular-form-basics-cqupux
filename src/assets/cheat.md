### 4 Steps for defining Reacting Forms

The 4 steps to wiring up a form are:

- In the Component (`.ts`) file:
    1. Declare the form variable
    1. Instantiate the form group in `ngOnInit` with `new FormBuilder().group({})`
- In the Template (`.html`) file:
    1. Add the `[formGroup]` attribute to the wrapper `<form>`
    1. Add the `formControlName` attributes to inputs

Example Component:

```ts
export class MyComponent implements OnInit {

  // Step 1: Declare the form variable
  myForm;

  constructor() {
  }

  ngOnInit(): void {

    // Step 2: Instantiate the form group
    this.myForm = new FormBuilder().group({
      someField: ""
    });

  }
}
```

Example Template:

```html
<!-- Step 3: Wire up the [formGroup] from Step 1 -->
<form [formGroup]="myForm">

    <!-- Step 4: Wire up the input to the form control from Step 2 -->
    <input type="text" formControlName="someField">

</form>
```

### Template Expressions

To render the value of a form field in the template:

```html
<p>
  {{ myForm.controls.someField.value }}
</p>
```

### Pipes

```html
<div>{{ 10 | currency }}</div>
<div>{{ 0.2 | percent }}</div>
<div>{{ "2020-12-12" | date }}</div>
```

### Property Binding

```html
<button [disabled]="myForm.controls.someField.value">
  Save
</button>
```

### NgIf

```html
<div *ngIf="myForm.controls.someField.value">
  this content can be shown or hidden...
</div>
```

### NgFor

```html
<div *ngFor="let item of items">
  {{item}}
</div>
```

### NgPlural

```html
<div class="text-right" [ngPlural]="10">
    10
    <ng-template ngPluralCase="other">things</ng-template>
    <ng-template ngPluralCase="1">thing</ng-template>
</div>
```
