# ng2-zoomable
A minimal Angular 2 image zoom directive.

## Installation
To install this library, run:

```bash
$ npm install ng2-zoomable --save
```

## Demo
Online demo is available on <a href="https://moeishaa.github.io/ng2-zoomable/">repo's GitHub Pages</a>. There will be a more sophisticated demo page sometime in future :)

To run a local demo, first clone/download this repo and then inside local directory:

```bash
$ npm install
$ npm run demo
```
After installation is over, load http://localhost:8080/ in your browser.

## Examples
First, import the ZoomableDirective directive:

```typescript
import { ZoomableDirective } from 'ng2-zoomable';
```

Then, add ZoomableDirective to your modules declarations array:

```typescript
@NgModule({
    declarations : [AppComponent, ZoomableDirective, ...],
})
```
Then just add the [zoomable] tag to your img element:

```html
<img [zoomable]='zoomOptions' [src]='imageSource'>
```

If you want to specify source of larger image to be used for zoomed view then add [zoomableSrc] tag to your img element:

```html
<img [zoomable]='zoomOptions' [zoomableSrc]='largeImageSource' [src]='imageSource'>
```

# Zoom Options
zoomOptions is an optional object in this format:

```javascript
peepView: {
  borderColor: '#fff',
  borderWidth: '2px',
  borderStyle: 'solid',
  cursor: 'zoom-in',
},
settings: {
  zoom: 4   // 4x zoom
}
```
You may choose to include/exclude any of these properties to style the boxes.

## License
MIT © [Moe Hosseini](hosseini.moe@gmail.com)