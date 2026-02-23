# 1. getElementById finds one element by its ID. getElementsByClassName finds many elements with the same class. querySelector finds the first match using CSS, ID and tag selector. querySelectorAll finds all matches using CSS, ID and tag selector.

# 2. At first create a element by using document.createElement("tag"), then use appendChild() to put it into the DOM.

# 3. Event Bubbling means when an event happens on a child element, it goes up step by step to its parent element until the root.

# 4. Event Delegation is when I put one event listener on a parent, and handle events from its children inside it. It is useful because I dont need many listeners, and it work even for new child elements added later.

# 5. preventDefault() stops the browsers default action like link opening or form submit. stopPropagation() stops the event from moving up to parent elements