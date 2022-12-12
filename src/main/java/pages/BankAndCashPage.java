package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BankAndCashPage {
	WebDriver driver;

	public BankAndCashPage(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.LINK_TEXT, using = "Bank & Cash")
	WebElement bankAndCashButton;
	@FindBy(how = How.XPATH, using = "//a[@href='https://techfios.com/billing/?ng=accounts/add/']")
	WebElement newAccountButton;
	@FindBy(how = How.XPATH, using = "//input[@id='account']")
	WebElement addAccountTitle;
	@FindBy(how = How.XPATH, using = "//input[@id='description']")
	WebElement addDescription;
	@FindBy(how = How.XPATH, using = "//input[@id='balance']")
	WebElement initialBalance;
	@FindBy(how = How.XPATH, using = "//input[@id='account_number']")
	WebElement accountNo;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_person']")
	WebElement contactPerson;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_phone']")
	WebElement phoneNo;
	@FindBy(how = How.XPATH, using = "//input[@id='ib_url']")
	WebElement bankURL;
	@FindBy(how = How.XPATH, using = "//button[@class='btn btn-primary']")
	WebElement signInNewAccount;
	
	
	public void clickBankCashButton() {
		bankAndCashButton.click();
	}

	public void enterNewAccount() {
		newAccountButton.click();
	}
	
	public void enterAccountType(String AccountTitle) {
		addAccountTitle.sendKeys(AccountTitle);
	}
	public void enterDescription(String description) {
		addDescription.sendKeys(description);
	}
	public void enterBalance(String balance) {
		initialBalance.sendKeys(balance);
	}
	public void enterAccNo(String addAccountNumber) {
		accountNo.sendKeys(addAccountNumber);
	}
	public void enterContactPerson(String contact) {
		contactPerson.sendKeys(contact);
	}
	public void enterPhoneNo(String phoneNumber) {
		phoneNo.sendKeys(phoneNumber);
	}
	public void enterBankURL(String bankingURL) {
		bankURL.sendKeys(bankingURL);
	}
	public void clickSignInNewAccount() {
		signInNewAccount.click();
	}
	public String accountCreated() {
		return driver.getPageSource();
	}

}
