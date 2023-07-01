## Form basics

- All the interactions should happen through semantic form elements and not through divs and spans. By using HTML form elements we tap into the power that's built into the browser. We'll save ourselves a lot of wasted effort trying to recreate in custom JavaScript what's already been built into the browser.
- We ensure that our forms will work on every device for every possible combination of input and output hardware, including devices we've never heard of.

```
<!doctype html>
<html dir="ltr" lang="en-us">
  <head>
    <title>Form Basics</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>

  <body>
	<main>

		<section>
    		<h2>Our Form</h2>
            <form action="success.html" method="get">
    			<div>
            		<label for="name">Name</label>
            		<input name="name" id="name" type="text" value="Jen">
    			</div>
    			<div>
            		<label for="email">Email</label>
            		<input name="email" id="email" type="email"
            		       placeholder="me@example.com" required>
            	</div>
            	<button type="submit">Sign up</button>
            </form>
		</section>

  </main>
  </body>
</html>
```

- When we want to add fields or the boxes where someone will type their name and email we use `<input>` element. Input element does not have a closing tag mostly because this element is so old it doesn't have the same structure as the more modern elements.
- Now what we need to understand is the input element is what's called a replaced element, meaning it's a kind of marker for the browser that tells the browser, hey, go get one of those piles of functionality that you have and stick it here. This is where the browser will put the form itself, loading a whole pile of complex code. This is where the magic happens.
- NOw obviously we have to hook this up to some kind of backend to give the form some place to go.
- The `action` and `method` attribute are used here only to make the demo work and we don't actually know what it does.
- To use or collect the data that has been entered we need to add an attribute to input called ``name` and with this we can report the data that's been entered into the form.
- By giving the `for` attribute the same value ("email") as `label`'s ID's value ("email") i.e by matching it we are relating both of them with each other which is helpful for people who are using the website without accessing the screen.
  Or we could wrap the label around the outside of the input, which clearly communicates to the browser, hey, this label is for this input field, both work.
- By adding the `type` attribute to each input we tell the browser what kind of data must be put in that input box.
  Like for the name field we'll collect `text`, which is the default. If you leave type off the browser will assume that it's type of text, so we don't have to include it. Then for the email field `type` equals `email`. Now when people fill out this form, the browser will double-check, and see if the data that they entered is an email. We can see that if a user tries to type something that's not an email address, they get a warning, and are asked to fix it.
- We also want to tell the browser that our button is a `submit ` button. We might have multiple buttons on this form, and we want to let the browser know which button to activate when a user hits return on their keyboard.
- We can also add a `required` attribute, to make the email feel required. Now the browser will insist that the user fills out the email field, before the form can be submitted.
- We use the `placeholder` attribute, and put a suggestion, or an example. It's light gray by default.
- There is an option of adding a ``value` attribute but this pre-populates the field with real content so the user will have to first erase this and then type what they actually want to which can lead to spelling mistakes.
- `Value` is helpful when you want to pre-populate a form with what you think is the right answer for that user

## Additional foem elements :

```
<!doctype html>
<html dir="ltr" lang="en-us">
  <head>
    <title>Form Basics</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="styles.css">
  </head>



  <body>
	<main>
		<section class="">
    		<h1>Our Form</h1>
    		<form action="received.html" method="get">
    			<div>
    				<label for="name">Name</label>
    				<input id="name" name="name" type="text">
    			</div>
    			<div>
    				<label for="email">Email</label>
    				<input id="email" name="email" type="email"
    				       placeholder="you@example.com">
    			</div>


    			<div>
    				<label for="password">Password</label>
    				<input id="password" name="password" type="password">
    			</div>
    			<div>
    				<label for="search">Search</label>
    				<input id="search" name="search" type="search" placeholder="&#128269;">
    			</div>
    			<div>
    				<label for="phone">Phone Number</label>
    				<input id="phone" name="phone" type="tel">
    			</div>

    			<div>
    				<label for="textarea">Text Area</label>
    				<textarea  id="textarea" name="textarea" cols="30" rows="15"></textarea>
    			</div>

    			<div>
    				<label for="date">Date</label>
	    			<input id="date" name="date" type="date">
    			</div>

    			<div>
    				<label for="color">Color</label>
	    			<input id="color" name="color" type="color">
    			</div>

    			<div>
    				<label for="file">File</label>
	    			<input id="file" name="file" type="file" accept="image/*" multiple>
    			</div>

    			<div>
    				<label for="checkbox">Checkbox</label>
						<input id="checkbox" name="simplecheckbox" type="checkbox" value="The checkbox is checked" checked >
    			</div>

					<div>
						<label for="selectlist">Choose one</label>
						<select id="selectlist" name="selectlist">
						  <option>First Option</option>
						  <option>Second Choice</option>
						  <option>Third Thing</option>
						</select>
					</div>

					<fieldset>
					  <legend>Checkbox fields inside a fieldset</legend>
						<input id="thischeck" name="checkboxlist" type="checkbox" value="This" checked >
						<label for="thischeck">This</label>
						<input id="orcheck" name="checkboxlist" type="checkbox" value="And Or">
						<label for="orcheck">And/Or</label>
						<input id="thatcheck" name="checkboxlist" type="checkbox" value="That">
						<label for="thatcheck">That</label>
					</fieldset>

					<fieldset>
					  <legend>Radio button list inside a fieldset</legend>
					  <input id="thisradio" name="radiobutton" type="radio" value="This" checked>
					  <label for="thisradio">This</label>
					  <input id="orradio" name="radiobutton" type="radio" value="Or">
					  <label for="orradio">Or</label>
					  <input id="thatradio" name="radiobutton" type="radio" value="That">
					  <label for="thatradio">That</label>
					</fieldset>


    			<button type="submit">Submit</button>
    		</form>
		</section>

    </main>
  </body>
</html>
```

- For the password field, it's `type` equals `password`. When we start to type into the password field, the browser is warning us not to use this, that's because the page we were using is set up to use HTTP and not HTTPS, which is smart. Users should not fill out forms like this on sites that haven't been secured by HTTPS. Especially not a password field. Some browsers will bring up an integrated password manager on password fields, to help the user fill in their password faster.
- To collect a paragraph or whole article of text we use the `text area` element. It's similar to the input element, and we pair it with a label in the same way, but it is a different element, we don't use `input`, we use `text area`. We can put a size on text area using the cols and rows attribute, but we don't have to, frequently we use CSS to override this size anyway.
- The `date ` type will give us a calender to choose a date from and the `color` will give a color picker to pick a colour and the `file` type will open the interface to upload a file.
  We can see above the `accept` attribute se to `multiple` because of which it is gonna allow us to upload only image files and will allow us to selecta nd ipload multiple files because of the `multiple` attributes.
- There is lso checkboxes and radio buttons but I am sleepy...will do it later (last two inutes of the video).
