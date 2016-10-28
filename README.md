# Lawmert Cart

## Overview

Lawmert, seller of fine goods, has hired _YOU_ to fix up their cart application. This means fixing the business logic errors and implementing the new features as required.

Required features:

 * Customer should be able to add item to cart by clicking a product.
 * Customer should be able to remove item from cart by clicking a remove button.
 * Customer should be able to adjust quantity of item in cart.
 * Customer should be able to view their total purchase amount.
 * Customer should be able to clear all items from cart by clicking a button.
 * Customer should see "Your cart is empty" when no items are in the cart.

Here is what such a thing should look like according to UX:

![full cart](http://i.imgur.com/IWIoGvh.png)

![empty cart](http://i.imgur.com/3VqMdkZ.png)

Unfortunately here's what it currently looks like:

![existing](http://i.imgur.com/7DSC569.png)

There are some sensible invariants:

 * Customer should not be able to have item of quantity 0 or less in their cart.
 * Customer should only see one of a given item in their cart.

There are some sensible developer best practices:

 * Your code should pass any test functionality of `npm test`.
 * Your result should match the UX.

Things which you do NOT need to touch (but can if you want to):

 * `config/*` - setup files for webpack and friends.
 * `entry/*` - entrypoint to the application.
 * `public/*` - static prebuilt assets (i.e. the main HTML file).

Although not _required_, feel free to:

 * Use external libraries.
 * Refactor existing code.
 * Alter the user interface.

If you do these things it should be noted that you explain _why_ you're doing them. For example, if you alter the UI and decide consciously not to use icons explain your reasoning.

## Submission Process

Your submission should be a series of git commits. You're free to commit things however you like. You should mention what you're changing and why you're changing it, however.

If there are things you'd like to change but don't know how to or don't have time to, feel free to mark them with a `TODO` so we know you've thought about them.

If there are broader architecture designs you'd like to discuss, feel free to add a markdown document in the project root called `NOTES.md` or similar.

Once you're done, simply collect everything:

```sh
tar -zcvf my-code.tar.gz .git
```

And then send it back.

## Setup

Getting going is easy!

```sh
npm install
npm run dev
open http://localhost:8080/
```
