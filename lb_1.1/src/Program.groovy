enum EmployerType { PRESIDENT, MANAGER, WORKER }

abstract class Employer
{
	protected EmployerType type_
	protected String name_
	protected int salaryPerMonth_
	
	public EmployerType getType()
	{
		return type_
	}

	public String getName()
	{
		return name_
	}

	public int getSalaryPerMonth()
	{
		return salaryPerMonth_
	}
	
	public String getString()
	{
		return "type: " + type_.name() + ", name: " + name_ + ", salaryPerMonth: " + salaryPerMonth_
	}
}

class President extends Employer
{	
	public President(String name, salaryPerMonth)
	{
		type_ = EmployerType.PRESIDENT
		name_ = name
		salaryPerMonth_ = salaryPerMonth
	}
}

class Manager extends Employer
{
	public Manager(String name, salaryPerMonth)
	{
		type_ = EmployerType.MANAGER
		name_ = name
		salaryPerMonth_ = salaryPerMonth
	}
}

class Worker extends Employer
{
	public Worker (String name, salaryPerMonth)
	{
		type_ = EmployerType.WORKER
		name_ = name
		salaryPerMonth_ = salaryPerMonth
	}
}

class Company
{
	private String name_
	private def employers_ = []
	
	public final Closure append = { Employer employer -> employers_ << employer }
	public final Closure remove = { Employer employer -> employers_.remove(employer) }
	public final Closure change = { def oldEmp, def newEmp -> employers_[employers_.indexOf(oldEmp)] = newEmp }
	public final Closure findByType = { def type -> employers_.findAll({ it.getType() == type}) }
	public final Closure sortByName = { employers_.sort { a, b -> a.getName() <=> b.getName() } }
	public final Closure saveToFile = { String filepath ->
		File file = new File(filepath)
		file.write("")
		employers_.each { file.append(it.getString() + "\r\n") }
	}

	public Company(String name)
	{
		this.name_ = name
	}
	
	public def getList()
	{
		return employers_
	}

	public int getEmployersAmount()
	{
		return employers_.size()
	}
	
	public int salaryPaymentPerMonth()
	{
		return employers_.inject(0, { sum, employer -> sum + employer.getSalaryPerMonth() })
	}
}

class Program
{
	static void printList(def list)
	{
		list.each { println(it.getString()) }
	}

	static void main(def args)
	{
		Company company = new Company("RockstarGames");

		def employer = new President("Steve", 10000)
		company.append(employer)
		company.append(new Manager("Jack", 4100))
		company.append(new Worker("David", 2200))
		company.append(new Worker("Bill", 2700))
		
		println("EMPLOYERS AMOUNT: " + company.getEmployersAmount())
		println("SALARY PAYMENT PER MONTH: " + company.salaryPaymentPerMonth())
		
		println("\n--- EMPLOYERS LIST ---")
		printList(company.getList())

		def new_employer = new President("Mike", 12000)
		println("\n--- CHANGE EMPLOYER ---")
		company.change(employer, new_employer)
		printList(company.getList())

		println("\n--- SORT EMPLOYERS BY NAME ---")
		company.sortByName()
		printList(company.getList())

		println("\n--- REMOVE EMPLOYER ---")
		company.remove(new_employer)
		printList(company.getList())

		println("\n--- FIND EMPLOYERS WITH TYPE OF WORKER ---")
		def employers = company.findByType(EmployerType.WORKER);
		printList(employers)
		
		// SAVE TRIALS TO THE FILE
		company.saveToFile("./out.txt")
	}
}
