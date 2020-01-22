package splashjs.controls;

import splashjs.Global;
import splashjs.controls.iface.ITree;

public class Tree extends Control implements ITree {

	private Object treeData;
	
	public Tree() {
		this(null);
	}
	
	public Tree(Object treeData) {
		super("tree");
		this.treeData = treeData;
		super.setRenderer(Global.global.getRendererCreator().createRenderer(Tree.class, this));
	}

	
	
	public Object getTreeData() {
		return this.treeData;
	}
}