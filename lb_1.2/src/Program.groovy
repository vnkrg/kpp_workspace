class House
{
	private Basement basement_
	private Roof roof_
	private def walls_ = []
	private def doors_ = []
	private def windows_ = []

	public boolean setBasement(Basement basement)
	{
		basement_ = basement
	}
	
	public void setRoof(Roof roof)
	{
		if (! roof.isDone())
		{
			println("Roof is not done!")
			return
		}
		roof_ = roof
	}
	
	public void addWall(Wall wall)
	{
		if (! wall.isDone())
		{
			println("Wall is not done!")
			return
		}
		walls_ << wall
	}
	
	public void addDoor(Door door)
	{
		if (! door.isDone())
		{
			println("Door is not done!")
			return
		}
		doors_ << door
	}
	
	public void addWindow(Window window)
	{
		if (! window.isDone())
		{
			println("Window is not done!")
			return
		}
		windows_ << window
	}
	
	public int getWallsNum()
	{
		return walls_.size()
	}
	
	public int getDoorsNum()
	{
		return doors_.size()
	}
	
	public int getWindowsNum()
	{
		return windows_.size()
	}
	
	public void printInfo()
	{
		println("basement_size: " + basement_.getSize())
		println("roof_size: " + roof_.getSize())
		println("walls_num: " + walls_.size())
		println("doors_num: " + doors_.size())
		println("windows_num: " + windows_.size())
	}
}

class Project
{
	int basementSize

	int wallSize
	int wallsNum

	int doorSize
	int doorsNum
	
	int windowSize
	int windowsNum
	
	int roofSize
	String roofColor
}

class Team
{
	private TeamLeader leader_
	def workers_ = []
	Project project_
	
	public Team(TeamLeader leader, Project project)
	{
		leader_ = leader;
		project_ = project;
	}
	
	void setLeader(TeamLeader leader)
	{
		leader_ = leader
	}
	
	void addWorker(Worker worker)
	{
		workers_ << worker
	}
	
	House build()
	{
		if (project_ == null)
		{
			println("Project is not set!")
			return null
		}

		House house = new House();
		makeBasement(house)
		makeWalls(house)
		makeWindows(house)
		makeDoors(house)
		makeRoof(house)
		
		return house
	}

	private void makeBasement(House house)
	{
		Basement building_basement = new Basement(project_.basementSize)

		while (! building_basement.isFull())
		{
			for (Worker worker : workers_)
			{
				if (! worker.isFree())
					continue
				
				building_basement.addPart(worker.makeBasementPart())
				if (building_basement.isFull())
					break;
			}
		}

		if (building_basement.isDone())
			house.setBasement(building_basement)
	}

	private void makeWalls(House house)
	{
		def building_walls = []
		
		while (building_walls.size() != project_.wallsNum)
		{
			for (Worker worker : workers_)
			{
				if (! worker.isFree())
					continue;

				building_walls << worker.makeWall(project_.wallSize)
				if (building_walls.size() == project_.wallsNum)
					break;
			}
		}

		for (Wall wall : building_walls)
		{
			if (wall.isDone())
				house.addWall(wall)
		}
	}

	private void makeDoors(House house)
	{
		def building_doors = []

		while (building_doors.size() != project_.doorsNum)
		{
			for (Worker worker : workers_)
			{
				if (! worker.isFree())
					continue;

				building_doors << worker.makeDoor(project_.doorSize)
				if (building_doors.size() == project_.doorsNum)
					break;
			}
		}

		for (Door door : building_doors)
		{
			if (door.isDone())
				house.addDoor(door)
		}
	}

	private void makeWindows(House house)
	{
		def building_windows = []

		while (building_windows.size() != project_.windowsNum)
		{
			for (Worker worker : workers_)
			{
				if (! worker.isFree())
					continue;

				building_windows << worker.makeWindow(project_.windowSize)
				if (building_windows.size() == project_.windowsNum)
					break;
			}
		}

		for (Window window : building_windows)
		{
			if (window.isDone())
				house.addWindow(window)
		}
	}

	private void makeRoof(House house)
	{
		Roof building_roof = new Roof(project_.roofSize)

		while (! building_roof.isFull())
		{
			for (Worker worker : workers_)
			{
				if (! worker.isFree())
					continue
				
				building_roof.addPart(worker.makeRoofPart())
				if (building_roof.isFull())
					break;
			}
		}

		if (building_roof.isDone())
			house.setRoof(building_roof)
	}
}

class Program
{
	static void main(def args)
	{
		Project project = new Project(
			basementSize:100,
			wallSize: 5,
			wallsNum: 4,
			doorSize: 5,
			doorsNum: 1,
			windowSize: 5,
			windowsNum: 4,
			roofSize: 100,
			roofColor: "red")

		TeamLeader leader = new TeamLeader("Арнольд")
		Team team = new Team(leader, project)

		team.addWorker(new Worker("Петя"))
		team.addWorker(new Worker("Вася"))
		team.addWorker(new Worker("Гриша"))
		team.addWorker(new Worker("Степа"))

		House house = team.build()
		house.printInfo()
	}
}
