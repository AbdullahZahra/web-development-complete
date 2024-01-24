# Bootstrap Cheat Sheet

## Writing & Typgraphy

```html
<!-- heading tags -->
<h1>Bootstrap 5 Tutorial</h1>
<h2>This is an h2</h2>
<h3>this is an h3</h3>
<h2 class="h6">this is an h2 tag with the h3 class</h2>

<!-- display headingts -->
<h1 class="display-1">dispaly 1 heading</h1>
<h1 class="display-4">dispaly 2 heading</h1>
<h1 class="display-6">dispaly 3 heading</h1>
<p class="display-1">p tag with dispaly-1 class</p>

<!-- lead text & alignment -->
<small>this is small text</small>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sequi
  impedit quisquam a nobis magni id debitis sint magnam deserunt optio ullam rem
  cum deleniti praesentium labore commodi, tempore itaque.
</p>
<p class="lead">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta unde placeat
  quasi nihil dolores! Corporis ipsum perferendis officia dicta maxime nisi ipsa
  necessitatibus. Nam perspiciatis nesciunt et est. Error, repudiandae!
</p>
<p class="lead text-center">Hello ninjas</p>
<p class="lead text-end">Hello ninjas</p>
<p class="lead">Hello ninjas</p>

<!-- text decoration & font weight -->
<p class="text-decoration-underline">This is underlined text</p>
<p class="text-decoration-line-through">This is line through text</p>
<p class="fw-bold">this is bold text</p>
<small>this is small text</small>

<!-- text colors -->
<p class="text-primary">theme primary colour</p>
<p class="text-secondary">theme secondary colour</p>
<p class="text-info">theme info colour</p>
<p class="text-warning">theme warning colour</p>
<p class="text-success">theme success colour</p>
<p class="text-danger">theme danger colour</p>
<p class="text-muted">theme muted colour</p>

<!-- bg colors -->
<p class="text-white bg-primary">white text on primary bg</p>
<p class="text-white bg-secondary">white text on secondary bg</p>
<p class="text-light bg-danger">white text on danger bg</p>
```

## Buttons & Button Groups

```html
<!-- basic buttons -->
<h2>Buttons</h2>

<button class="btn btn-primary">primary button</button>
<button class="btn btn-secondary">secondary button</button>

<!-- anchor tags as buttons -->
<h2>Links as buttons</h2>

<a href="#" class="btn btn-info">info anchor tag</a>
<a href="#" class="btn btn-success">success anchor tag</a>

<!-- button sizes -->
<h2>Button sizes</h2>

<button class="btn btn-lg btn-danger">larger danger button</button>
<button class="btn btn-sm btn-warning">small danger button</button>

<!-- outlined styles -->
<h2>Button Styles</h2>

<button class="btn btn-outline-primary">outlined primary button</button>
<button class="btn btn-outline-secondary btn-lg">
  large outlined secondary button
</button>

<!-- button groups -->
<h2>Button Groups</h2>

<div class="btn-group">
  <a href="#" class="btn btn-primary">button 1</a>
  <a href="#" class="btn btn-warning">button 2</a>
  <a href="#" class="btn btn-success">button 2</a>
</div>
```

# Utility Classes

```html
<!-- margin and padding -->
<div class="bg-primary m-1 p-1">small margin and padding</div>
<div class="bg-primary m-5 p-5">large margin and padding</div>
<div class="bg-primary my-3 px-5">
  margin in y direction, padding in x direction
</div>
<div class="bg-primary mt-3 mb-4 ms-5 me-1 ps-5 pt-4 pe-2 pb-1">
  m & p for each direction
</div>

<!-- borders -->
<div class="m-3 p-3 border">default border</div>
<div class="m-3 p-3 border-top border-end">individual borders</div>
<div class="m-3 p-3 border-start border-success">
  border success colour at start
</div>
<div class="m-3 p-3 border-start border-danger border-5">thicker border</div>
<div class="m-3 p-3 rounded border border-5">rounded corners</div>
<div class="m-3 p-3 rounded-pill border border-5">rounded pill corners</div>

<!-- box shadow -->
<div class="m-3 p-3 shadow-sm">element with small box shadow</div>
<div class="m-3 p-3 shadow-lg">element with large box shadow</div>

<!-- font weight -->
<p class="fw-bold">bold text</p>
<p class="fw-bolder">bolder text</p>
<p>bold text</p>
<p class="fw-light">light text</p>
<p class="fwt-italic">italic text</p>
<p class="fwt-italic fw-light">italic light text</p>
```
