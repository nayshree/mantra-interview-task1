# Bootstrap Vertical Carousel

**Version 1.0.0**

Customizing bootstrap 3 Carousel with small bunch of css to make Vertical Carousel

## Getting Started
Include [tooltip.css](https://github.com/vineethtrv/Bootstrap-vertical-carousel/blob/master/vertical-carousel.css) on your project.

- [Plugin Demo](https://vineethtrv.github.io/Bootstrap-vertical-carousel/)
- [codepen](https://codepen.io/vineethtr/pen/rVjWMx)


![alt text](https://raw.githubusercontent.com/vineethtrv/Bootstrap-vertical-carousel/master/dea19824-dab6-46bb-8b23-a8ceee63c111.gif)

## Contributor

- Vineeth TR <vineethtrv@gmail.com>

---

Add class " vertical " with carousel html 

```
<div class="vertical carousel slide" data-ride="carousel">
   ...
</div>

```

And you can use this css to customize carousel

```
.vertical.carousel .carousel-control {
    bottom: auto;
    width: 100%;
    height: 15%;
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0, rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));
    background: -moz-linear-gradient(top, rgba(0,0,0,0.5) 0, rgba(0,0,0,0) 100%);
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0, rgba(0, 0, 0, 0) 100%);
}
.vertical.carousel .carousel-control.right {
  top: auto;
  bottom: 0;
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.5)));
  background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%);
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
}
.vertical.carousel .carousel-control .glyphicon {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}
.vertical.carousel .carousel-indicators {
  bottom: auto;
  top: 50%;
  left: auto;
  right: 10px;
  width: 14px;
  margin: 0;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
}
.vertical.carousel .carousel-inner > .item {
  left: 0;
  top: 0;
}
.vertical.carousel .carousel-inner > .item > img {
  width: 100%;
}
.vertical.carousel .carousel-inner > .item.next,
.vertical.carousel .carousel-inner > .item.active.right {
  -webkit-transform: translate3d(0, 100%, 0);
          transform: translate3d(0, 100%, 0);
  top: 0;
}
.vertical.carousel .carousel-inner > .item.prev,
.vertical.carousel .carousel-inner > .item.active.left {
  -webkit-transform: translate3d(0, -100%, 0);
          transform: translate3d(0, -100%, 0);
  top: 0;
}
.vertical.carousel .carousel-inner > .item.next.left,
.vertical.carousel .carousel-inner > .item.prev.right,
.vertical.carousel .carousel-inner > .item.active {
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
  top: 0;
}
.vertical.carousel .carousel-inner > .active,
.vertical.carousel .carousel-inner > .next.left,
.vertical.carousel .carousel-inner .prev.right {
  top: 0;
}
.vertical.carousel .carousel-inner > .next,
.vertical.carousel .carousel-inner > .active.right {
  top: 100%;
  left: 0;
}
.vertical.carousel .carousel-inner > .prev,
.vertical.carousel .carousel-inner > .active.left {
  top: -100%;
  left: 0;
}

```
