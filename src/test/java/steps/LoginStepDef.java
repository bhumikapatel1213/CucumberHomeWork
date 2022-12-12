package steps;

import java.util.Random;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.BankAndCashPage;
import pages.LoginPage;
import pages.TestBase;

public class LoginStepDef extends TestBase{
	LoginPage loginpage;
	BankAndCashPage bankandcashpage;

	@Before
	public void setUp() {
		initDriver();
		loginpage = PageFactory.initElements(driver, LoginPage.class);
		bankandcashpage = PageFactory.initElements(driver, BankAndCashPage.class);
	}
   
	@Given("^User is on the techfios login page$") 
	public void user_is_on_techfios_login_page() {
		driver.get("https://www.techfios.com/billing/?ng=admin/");
		
	}
	
	@When("^User enters the \"([^\"]*)\" in \"([^\"]*)\" field$")
	public void user_enters_the_in_field(String loginData,String field) {
		if(field.equalsIgnoreCase("Username")){
			loginpage.enterUserName(loginData);
			System.out.println("Username" + loginData);
		}
		else if(field.equalsIgnoreCase("Password")) {
			loginpage.enterPassword(loginData);
			System.out.println("Password" + loginData);
		}
		else {
			System.out.println("Enable to enter the login data" + loginData);
		}
	}

	@And("User clicks on \"([^\"]*)\"$")
	public void user_clicks_on(String buttonOrlink) {
	    switch(buttonOrlink) {
	    case "login":
	    	clickSignInButton(loginpage.SignInButton);
	    	break;
	    case "bankCash":
	    	bankandcashpage.clickBankCashButton();
	    	break;	
	    case "newAccount":
	    	bankandcashpage.enterNewAccount();
	    case "submit":
	    	bankandcashpage.clickSignInNewAccount();
	    default:
	    	System.out.println("Enable to click on button or link" + buttonOrlink);
	    	break;
	    }
	    
	}
	
	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page() {
		String expectedTitle = "Dashboard- iBilling";
		String actualTitle = loginpage.getPageTitle();
		Assert.assertEquals(expectedTitle, actualTitle);
	}

	@Then("^User enters \"([^\"]*)\" in \"([^\"]*)\" page$")
	public void user_enters_in_page(String accountPageDetail,String field) {
		Random rand = new Random();
		int randomInt = rand.nextInt(1000);
		
		if(field.equalsIgnoreCase("AccountTitle")){
			bankandcashpage.enterAccountType(accountPageDetail + randomInt);
			System.out.println("AccountTitle" + accountPageDetail);
		}
		else if(field.equalsIgnoreCase("AccountDescription")) {
			bankandcashpage.enterDescription(accountPageDetail + randomInt);
			System.out.println("description" + accountPageDetail);
		}
		else if(field.equalsIgnoreCase("InitialBalance")) {
			bankandcashpage.enterBalance(accountPageDetail + randomInt);
			System.out.println("initialBalance" + accountPageDetail);
		}
		else if(field.equalsIgnoreCase("AccountNumber")) {
			bankandcashpage.enterAccNo(accountPageDetail + randomInt);
			System.out.println("accountNumber" + accountPageDetail);
		}
		else if(field.equalsIgnoreCase("ContactPerson")) {
			bankandcashpage.enterContactPerson(accountPageDetail + randomInt);
			System.out.println("contactPerson" + accountPageDetail);
		}
		else if(field.equalsIgnoreCase("PhoneNumber")) {
			bankandcashpage.enterPhoneNo(accountPageDetail + randomInt);
			System.out.println("Phone" + accountPageDetail);
		}
		else if(field.equalsIgnoreCase("BankingURL")) {
			bankandcashpage.enterBankURL(accountPageDetail + randomInt);
			System.out.println("internetBankingURL" + accountPageDetail);
		}
		else {
			System.out.println("Enable to enter the login data" + accountPageDetail);
		} 
	}


	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully() {
		String expectedResult = "Account Created Successfully";
		String pagesource = bankandcashpage.accountCreated();
		Assert.assertTrue(pagesource.contains(expectedResult));

	}
}
