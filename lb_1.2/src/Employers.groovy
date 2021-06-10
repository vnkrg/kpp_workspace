interface IEmployer
{
	String getName()
}

class TeamLeader implements IEmployer
{
	private String name_;
	
	TeamLeader(String name)
	{
		name_ = name
	}

	@Override
	public String getName()
	{
		return name_
	}
}

interface IWorker
{
	boolean isFree()
	BasementPart makeBasementPart()
	RoofPart makeRoofPart()
	Wall makeWall(int size)
	Door makeDoor(int size)
	Window makeWindow(int size)
}

class Worker implements IEmployer, IWorker
{
	private String name_
	private boolean isFree_

	public Worker(String name)
	{
		name_ = name
		isFree_ = true
	}

	@Override
	public String getName()
	{
		return name_
	}
	
	@Override
	public boolean isFree()
	{
		return isFree_
	}

	@Override
	public BasementPart makeBasementPart()
	{
		isFree_ = false
		def part = new BasementPart(10);
		isFree_ = true

		return part
	}
	
	@Override
	public Wall makeWall(int size)
	{
		isFree_ = false
		def part = new Wall(size)
		isFree_ = true

		return part
	}
	
	@Override
	public Door makeDoor(int size)
	{
		isFree_ = false
		def part = new Door(size)
		isFree_ = true
		return part
	}
	
	@Override
	public Window makeWindow(int size)
	{
		isFree_= false
		def part = new Window(size)
		isFree_ = true
		return part
	}
	
	@Override
	public RoofPart makeRoofPart()
	{
		isFree_ = false
		def part = new RoofPart(10)
		isFree_ = true
		return part
	}
}
