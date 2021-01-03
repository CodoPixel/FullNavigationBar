# FullNavigationBar

A full responsive navigation bar for a website with dropdown menus and awesome sidebar. 

## Get started

First of all, you have to copy the source code:

```
<link rel="stylesheet" href="css/header.css">
<link rel="stylesheet" href="css/sidebar-dark.css"> <!-- or sidebar-light.css -->
```

With the javascript file at the end of `<body>`:

```
<script src="controller.js"></script>
```

This javascript file will control whether the user clicks on the burger or on the dropdown menu inside the sidebar. It also controls the dropdown menus of the header.

Now you have to add the media queries. If you do not add the media queries, the sidebar will never appear. I decided to set the breakpoint to 950px.

```
@media screen and (max-width: 950px) {
    header nav {
        display:none;
    }

    #sidebar {
        display:initial;
    }
}
```

Feel free to modify the css files in order to customize the navigation bar.

## The dropdown menu of the header

There are two types of dropdown: one from the classic navigation bar, and one from the sidebar.
The first dropdown menu is shown when **hovering over** the mouse. Let's see the code:

```
<!-- classic link without dropdown menu -->
<div class="nav-container-link">
    <a href="/" class="mainlink active-link">Home</a>
</div>
<!-- awesome link with dropdown menu -->
<div class="container-dropdown nav-container-link">
    <a href="/" class="name-of-dropdown">Science</a>
    <div class="content-dropdown">
        <a href="/">Popularization</a>
        <a href="/">Calculations and encryption</a>
        <a href="/">Human Brain</a>
        <a href="/">Psychology</a>
        <a href="/">The sleep</a>
    </div>
</div>
```

In this example, you have two links from the classic navigation bar. The first one does'nt have a dropdown menu and it's set as the active link. Then, the other link has a dropdown menu. You can see that the "name" of the dropdown menu is a link ("Science"). It gives you a lot of flexibility. Indeed, if you do not want the sidebar to appear too early (for tablets for example), you can choose to keep the classic navigation bar because the dropdown menus are not essential.

## The dropdown menu of the sidebar

In the sidebar, you can have dropdown menus. Great for mobile !!
Actually, the sidebar is just awesome, with cool animations and flexibility.

First of all, when you reach the breakpoint, a burger appears. When you click on it, a nice progressive animation occurs: the burger becomes a cross, the sidebar and a shader appears. Indeed, the background darkens. The sidebar disappears when the user clicks on the shader or on the cross.

This is more complex, so I invite you to consult the example code in `src`.

## Last details

You can choose between two colors for the sidebar: light or dark.

## License

MIT License.