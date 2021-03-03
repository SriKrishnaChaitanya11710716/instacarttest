// Include the chrome driver 
require("chromedriver"); 

// Include selenium webdriver 
let swd = require("selenium-webdriver"); 
let browser = new swd.Builder(); 
let tab = browser.forBrowser("chrome").build(); 

// Get the credentials from the JSON file 
let { email, pass } = require("./credentials.json"); 

// Step 1 - Opening the geeksforgeeks sign in page 
let tabToOpen = 
	tab.get("https://www.instacart.com"); 
tabToOpen 
	.then(function () { 

		// Timeout to wait if connection is slow 
		let findTimeOutP = 
			tab.manage().setTimeouts({ 
				implicit: 10000, // 10 seconds 
			}); 
		return findTimeOutP; 
    }) 
    .then(function () { 

		// Step 2 - Finding the zipcode input 
		let promiseUsernameBox = 
			tab.findElement(swd.By.css("#address_line_1")); 
		return promiseUsernameBox; 
	}) 
	.then(function (usernameBox) { 

		// Step 3 - Entering the zipcode 
		let promiseFillUsername = 
			usernameBox.sendKeys("20146"); 
		return promiseFillUsername; 
	}) 

		
	.then(function (signInBtn) { 
 //continue button
			let promiseClickSignIn = tab.findElement(swd.By.css("#root > div > div.css-l6ct9h > div.css-1cykb4c > div.css-8atqhb > div > form > div > div:nth-child(2) > button")).click(); 
            return promiseClickSignIn; })
    	
	.then(function (signInBtn) { 
        //login using google button
                   let promiseClickSignIn = tab.findElement(swd.By.css("#root > div > div.css-l6ct9h > div.css-1cykb4c > div.css-8atqhb > form > div:nth-child(10) > button")).click(); 
                   return promiseClickSignIn; })
	
	.then(function () { 

		// Step 2 - Finding the username input 
		let promiseUsernameBox = 
			tab.findElement(swd.By.css("#identifierId")); 
		return promiseUsernameBox; 
	}) 
	.then(function (usernameBox) { 

		// Step 3 - Entering the username 
		let promiseFillUsername = 
			usernameBox.sendKeys(email); 
		return promiseFillUsername; 
	}) 
	.then(function (signInBtn) { 

		// Step 7 - Clicking the Sign In button 
		let promiseClickSignIn = tab.findElement(swd.By.css("#identifierNext > div > button > div.VfPpkd-RLmnJb")).click(); 
		return promiseClickSignIn; })
	.then(function () { 
		console.log( 
			"Username entered successfully in" + 
			"'login demonstration' for BIGBASKET"
		); 
	
	
		// Step 4 - Finding the password input 
		let promisePasswordBox = 
			tab.findElement(swd.By.css("#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input")); 
		return promisePasswordBox; 
	}) 
	.then(function (passwordBox) { 

		// Step 5 - Entering the password 
		let promiseFillPassword = 
			passwordBox.sendKeys(pass); 
		return promiseFillPassword; 
	}) 
	.then(function () { 
		console.log( 
			"Password entered successfully in" + 
			" 'login demonstration' for BIGBASKET"
		); 

		// Step 6 - Finding the Sign In button 
		let promiseSignInBtn = tab.findElement( 
			swd.By.css("#passwordNext > div > button > div.VfPpkd-RLmnJb") 
		); 
		return promiseSignInBtn; 
	}) 
	.then(function (signInBtn) { 

		// Step 7 - Clicking the Sign In button 
		let promiseClickSignIn = signInBtn.click(); 
		return promiseClickSignIn; 
	}) 
	.then(function () { 
		console.log("Successfully signed in Bigbasket!"); 
	}) 
	.catch(function (err) { 
		console.log("Error ", err, " occurred!"); 
	});
	