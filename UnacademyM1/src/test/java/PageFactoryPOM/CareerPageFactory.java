package PageFactoryPOM;

import org.openqa.selenium.Keys;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CareerPageFactory {
	WebDriver driver;

	/******* Locators to locate WebElements *******/

	// Location of Filter @Location
	@FindBy(xpath = "//input[@id='locations-filter_input']")
	WebElement Location;

	// Location to select @Location as @India
	@FindBy(css = "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > dialog:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1)")
	WebElement LocationIndia;

	// Location where selected @Location is displayed
	@FindBy(xpath = "/html[1]/body[1]/div[1]/div[1]/div[1]/main[1]/div[2]/ul[1]/li[1]/div[1]/div[1]/p[1]/span[2]")
	WebElement SelectedLocation;

	// Location of Filter @Department
	@FindBy(xpath = "//input[contains(@value,'Department')]")
	WebElement Department;

	// Location of @Search_bar in @DepartmentFilter
	@FindBy(xpath = "//input[@placeholder='Search']")
	WebElement DeptSearch;

	// Location where selected @Department is displayed
	@FindBy(xpath = "/html[1]/body[1]/div[1]/div[1]/div[1]/main[1]/div[2]/ul[1]/li[1]/div[1]/div[1]/p[1]/span[1]")
	WebElement SelectedDept;

	// Location of Filter @Work_Type
	@FindBy(xpath = "//input[@value='Work type ']")
	WebElement WorkType;

	// Location to select a @Work_Type
	@FindBy(xpath = "/html[1]/body[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[3]/div[1]/dialog[1]/div[1]/div[1]/ul[1]/li[1]/div[1]/div[1]/span[1]")
	WebElement SelectWorkType;

	// Location where selected @Work_Type is displayed
	@FindBy(xpath = "/html[1]/body[1]/div[1]/div[1]/div[1]/main[1]/div[2]/ul[1]/li[1]/div[1]/div[1]/p[1]/span[3]")
	WebElement DisplayedWorkType;

	// Location of @Clear_Filters button
	@FindBy(xpath = "//a[normalize-space()='Clear filters']")
	WebElement ClearF;

	// Location of @Search_bar to search @Job_Title
	@FindBy(xpath = "//input[@placeholder='Search jobs…']")
	WebElement SearchJobs;

	// Location where selected @Job_Title is displayed
	@FindBy(xpath = "/html[1]/body[1]/div[1]/div[1]/div[1]/main[1]/div[2]/ul[1]/li[1]/div[1]/h3[1]")
	WebElement JobTitle;

	// Location where @Invalid_Title message is displayed
	@FindBy(xpath = "//h2[normalize-space()='Sorry, no jobs found matching this criteria.']")
	WebElement SearchErrorMessage;

	/******* Methods to perform actions *******/

	// Constructor for initializing Page_Facotry
	public CareerPageFactory(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	// @setLocation() will select a location in @Location_Filter
	public void setLocation() throws InterruptedException {
		Thread.sleep(2000);
		Location.click();
		LocationIndia.click();

	}

	/*
	 * @checkLocation() will check if displayed job titles have same @Location as
	 * selected
	 * 
	 * @Returns TRUE if job titles have same @Location as selected
	 * 
	 * @Returns FALSE if job titles have different @Location than selected
	 */
	public boolean checkLocation() {
		String str = SelectedLocation.getText(); // Fetches location from displayed jobs
		String str2 = LocationIndia.getText(); // Location that we have selected
		if (str.contains(str2)) {
			System.out.println("*****Location is same as selected*****");
			return true;
		} else {
			System.out.println("*****Location is different than selected*****");
			return false;
		}

	}

	// @setDepartment(String dept) will select a Department in @Department_Filter
	// @Param is entered in search box to select the department
	public void setDepartment(String dept) throws InterruptedException {
		Thread.sleep(2000);
		Department.click();
		DeptSearch.sendKeys(dept);
		DeptSearch.sendKeys(Keys.ENTER); // To press ENTER Key
	}

	/*
	 * @checkDepartment() will check if displayed job titles have same @Department
	 * as selected
	 * 
	 * @Returns TRUE if job titles have same @Department as selected
	 * 
	 * @Returns FALSE if job titles have different @Department than selected
	 * 
	 * @BooleanParam represents if we want to press clear filters button
	 * ClearFilters button is clicked only when we are testing for multiple
	 * departments in single test case
	 */
	public boolean checkDepartment(String dept, boolean b) throws InterruptedException {
		String str = SelectedDept.getText(); // Fetches location from displayed jobs

		if (str.contains(dept)) {
			System.out.println("*****Department is same as selected*****");
			if (b == true) {
				Thread.sleep(3000);
				// Department.click();
				ClearF.click();
			}
			return true;
		} else {
			System.out.println("*****Department is different than selected*****");
			if (b == true) {
				Thread.sleep(3000);
				// Department.click();
				ClearF.click();
			}
			return false;
		}
	}

	// @setWorkType will select a WorkType in @WorkType_Filter
	public void setWorkType() throws InterruptedException {
		Thread.sleep(3000);
		WorkType.click();
		SelectWorkType.click();
	}

	/*
	 * @checkWorkType() will check if displayed job titles have same @WorkType as
	 * selected
	 * 
	 * @Returns TRUE if job titles have same @WorkType as selected
	 * 
	 * @Returns FALSE if job titles have different @WorkType than selected
	 */
	public boolean checkWorkType() {
		String str = SelectWorkType.getText();
		String str2 = DisplayedWorkType.getText();
		if (str.contains(str2)) {
			System.out.println("*****Work Type is same as selected*****");
			return true;
		} else {
			System.out.println("*****Work Type is different than selected*****");
			return false;
		}
	}

	// ClickClear() will click on Clear Filters button
	public void ClickClear() {
		ClearF.click();
		System.out.println("*****ClickClear()*****");
	}

	/*
	 * CheckClear() will verify if Clear Filters was successful or not
	 * 
	 * @Returns TRUE if Clear Filters was successful
	 * 
	 * @Returns FALSE if Clear Filters was unsuccessful
	 */
	public boolean CheckClear() {
		boolean present;
		try {
			ClearF.isDisplayed();
			present = true;
		} catch (NoSuchElementException e) {
			present = false;
		}

		System.out.println("*****Clear Filters : " + present + "*****");
		return present;
	}

	// SearchTitle(String title) enters a title in @Search_Box
	public void SearchTitle(String title) {
		SearchJobs.sendKeys(title);
		SearchJobs.sendKeys(Keys.ENTER);
		System.out.println("*****Title Entered*****");
	}

	/*
	 * ValidateTitle() will verify if displayed job titles are according to entered
	 * title
	 * 
	 * @Returns TRUE if Clear Filters was successful
	 * 
	 * @Returns FALSE if Clear Filters was unsuccessful
	 */
	public String ValidateTitle() {
		String title = JobTitle.getText();
		System.out.println("*****Returning Actual Title*****");
		return title;
	}

	/*
	 * ErrorMessage() will verify if error message is displayed when invalid job
	 * title is entered
	 * 
	 * @Returns TRUE if error message is displayed
	 * 
	 * @Returns FALSE if error message is not displayed
	 */
	public boolean ErrorMessage() {
		System.out.println("*****Error Message????? " + SearchErrorMessage.isDisplayed());
		return SearchErrorMessage.isDisplayed();
	}
}
