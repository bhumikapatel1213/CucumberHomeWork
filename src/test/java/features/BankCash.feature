@BankCashFeature
Feature: Techfios bank and cash New Account Functionality 

@Scenario1
Scenario Outline: User should be able to login with valid credentials 
	and open a new account	
	Given User is on the techfios login page 
	When User enters the "<username>" in "Username" field
	When User enters the "<password>" in "Password" field
	And User clicks on "login"
	Then User should land on Dashboard page 
	And User clicks on "bankCash"
	And User clicks on "newAccount"
	And User enters "<accountTitle>" in "AccountTitle" page 
	And User enters "<description>" in "AccountDescription" page 
	And User enters "<initialBalance>" in "InitialBalance" page 
	And User enters "<accountNumber>" in "AccountNumber" page 
	And User enters "<contactPerson>" in "ContactPerson" page 
	And User enters "<Phone>" in "PhoneNumber" page  
	And User enters "<internetBankingURL>" in "BankingURL" page 
	And User clicks on "submit"
	Then User should be able to validate account created successfully
	
	Examples:
 | username          | password |accountTitle| description| initialBalance | accountNumber | contactPerson | Phone| internetBankingURL |
 | demo@techfios.com |   abc123 |  Checking  | Salary     | $3450          | 23454167      | 876987456     | 2345 | www.yahoo.com      |