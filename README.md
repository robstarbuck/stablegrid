![StableGrid Logo](https://raw.githubusercontent.com/starbuck451/stablegrid/master/StableGridLogo.png)

#StableGrid

A basic grid system and Bootstrap alternative for use with AngularJS and AngularUI's Bootstrap directives, it includes styling for:

* Buttons
* Dropdown
* Typeahead

You will find the AngularUI project here [AngularUI's version of Bootstrap](https://angular-ui.github.io/#ui-bootstrap).

**!Important** Uses AngularUI - **0.13.0**, which at the time of writing (_2015-06-02_) was only available as a snapshot.

The following directives must be included as modules for in order to work:

```javascript
'ui.bootstrap.dropdown',
'ui.bootstrap.buttons',
'ui.bootstrap.typeahead'
```

Stablegrid can be installed with Bower

```sh
bower install stablegrid
```

Optionally the SASS files have been included in the **/scss** directory, configuration options are included in **/scss-conf**.

A [Demo](http://ouinon.github.io/stablegrid/#/) of the grid can be found here.

---

A 'Lite' version of Stablegrid without any of the directive dependencies can also be found [here](https://github.com/starbuck451/stablegrid-lite):
