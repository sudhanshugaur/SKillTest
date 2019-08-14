# SkillTest
1. Install npm via "install npm"
2. install cypress via "npm install cypress"
3. install node "pip install node"
4. type "npm start"
5. once done, cypress via "npm run cypress"
6. This will open cypress run window where you can choose the file to run test cases.

======
On the 2ed page https://jungle-socks.herokuapp.com/checkout/create
1. It would have been good if the tables have some identifer. 
The subtotals,tax,total have identifiers but stocks do not. Make it difficult to locate them
2. "Ship to state" table should alo lack an identifier.
3. "Checkout" button also lacks identifier.
4. These states were missing from the drop down -> "District of Columbia","American Samoa","Guam",,"Virgin Islands", "Puerto Rico

=======

Test case design:
There is a file "cypress.json" whihc has all the config values.

The test cases have been devided into 2 parts
1. Positive
2. Negative

For positive test cases I have included: 
1. For California with tax rate .08 -> Buying all the items.
2. For New York with tax rate 0.06 -> Buying all the items.
3. For Minnesota with tax rate 0.00 -> Buying all the items.
4. For any other state with tax rate 0.05 -> Buying all the items.
5. For any other state with tax rate 0.05, when user enters in franction for example: 10.3 -> Buying all the items 
6. For New York with tax rate 0.06, user enters acceptable and non acceptable quantities to buy.

For negative/edge test cases I have included:
1. When user enters 0 things to buy.
2. When user enters values other than digits.
3. When user enters nothing but a selecting state and click checkout.
4. When user enters nothing,not selecting a state and click checkout.
5. For North Dekota the taxes are calulated at 10% not 5%. -> This test case fails.(Refer to BUG Caught section of README)

BUG Caught:
1. For the state "North Dakota" the Taxes are caluculated at 10% not 5% (as mentioned) :) -> I have included it as a seperate test case.

OBSERVATION:
1. Display of "In Stock" is misleading. As it has no negative impact on the item the customer can buy. I am ignoring this field all together in my automation.





