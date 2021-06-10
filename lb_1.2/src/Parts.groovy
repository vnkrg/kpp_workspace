interface IPart
{
	int getSize()
	boolean isDone()
}

class BasementPart implements IPart
{
	private int size_

	public BasementPart(int size)
	{
		size_ = size
	}
	
	@Override
	public int getSize()
	{
		return size_
	}
	
	@Override
	public boolean isDone()
	{
		return true;
	}
}

class Basement implements IPart
{
	private int size_
	private basementParts_ = []

	public Basement(int size)
	{
		size_ = size;
	}
	
	public addPart(BasementPart part)
	{
		basementParts_ << part
	}
	
	public boolean isFull()
	{
		return basementParts_.inject(0, {sum, el -> sum + el.getSize()}) >= size_
	}

	@Override
	public int getSize()
	{
		return size_
	}
	
	@Override
	public boolean isDone()
	{
		return isFull()
	}
}

class Wall implements IPart
{
	private int size_
	
	public Wall(int size)
	{
		size_ = size
	}

	@Override
	public int getSize()
	{
		return size_
	}
	
	@Override
	public boolean isDone()
	{
		return true;
	}
}

class Door implements IPart
{
	private int size_

	public Door(int size)
	{
		size_ = size
	}

	@Override
	public int getSize()
	{
		return size_
	}
	
	@Override
	public boolean isDone()
	{
		return true;
	}
}

class Window implements IPart
{
	private int size_

	public Window(int size)
	{
		size_ = size
	}

	@Override
	public int getSize()
	{
		return size_
	}
	
	@Override
	public boolean isDone()
	{
		return true;
	}
}

class RoofPart implements IPart
{
	private int size_;

	public RoofPart(int size)
	{
		size_ = size
	}
	
	@Override
	public int getSize()
	{
		return size_
	}
	
	@Override
	public boolean isDone()
	{
		return true;
	}
}

class Roof implements IPart
{
	private int size_
	private roofParts_ = []
	
	public Roof(int size)
	{
		size_ = size
	}
	
	public addPart(RoofPart part)
	{
		roofParts_ << part;
	}
	
	public boolean isFull()
	{
		roofParts_.inject(0, {sum, el -> sum + el.getSize()}) >= size_
	}

	@Override
	public int getSize()
	{
		return size_;
	}
	
	@Override
	public boolean isDone()
	{
		return isFull()
	}
}
