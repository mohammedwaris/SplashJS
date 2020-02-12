package splashjs.render;

import splashjs.Global;

import splashjs.display.Stage;
import splashjs.display.Sprite;
import splashjs.display.MovieClip;
import splashjs.display.Image;
import splashjs.display.Line;
import splashjs.display.Circle;
import splashjs.display.Scene;

import splashjs.render.display.StageRenderer;
import splashjs.render.display.SpriteRenderer;
import splashjs.render.display.MovieClipRenderer;
import splashjs.render.display.ImageRenderer;
import splashjs.render.display.LineRenderer;
import splashjs.render.display.CircleRenderer;
import splashjs.render.display.SceneRenderer;

import splashjs.controls.List;
import splashjs.controls.Button;
import splashjs.controls.Tree;
import splashjs.controls.Label;

import splashjs.text.Font;
import splashjs.text.StaticText;
import splashjs.text.InputText;

import splashjs.render.text.FontRenderer;
import splashjs.render.text.StaticTextRenderer;
import splashjs.render.text.InputTextRenderer;

import splashjs.net.FileReference;
import splashjs.net.URLLoader;

import splashjs.render.net.FileReferenceRenderer;
import splashjs.render.net.URLLoaderRenderer;

import splashjs.utils.ByteArray;
import splashjs.utils.ResourceLoader;
import splashjs.utils.Resource;

import splashjs.render.utils.ResourceLoaderRenderer;
import splashjs.render.utils.ResourceRenderer;
import splashjs.render.utils.ByteArrayRenderer;

import splashjs.application.Application;
import splashjs.application.StageOwner;

import splashjs.media.Sound;
import splashjs.media.Video;
import splashjs.media.Camera;

import splashjs.render.media.SoundRenderer;
import splashjs.render.media.VideoRenderer;
import splashjs.render.media.CameraRenderer;

import splashjs.events.iface.IEventDispatcher;

import splashjs.render.GlobalRenderer;
import splashjs.render.iface.IRendererCreator;
import splashjs.render.iface.IRenderer;



import splashjs.render.application.ApplicationRenderer;
import splashjs.render.application.StageOwnerRenderer;

import splashjs.render.controls.ListRenderer;
import splashjs.render.controls.ButtonRenderer;
import splashjs.render.controls.TreeRenderer;
import splashjs.render.controls.LabelRenderer;







import splashjs.animation.ScaleTransition;
import splashjs.animation.FadeTransition;
import splashjs.animation.CircularTransition;
import splashjs.animation.RotationTransition;
import splashjs.animation.TranslateTransition;
import splashjs.animation.SpriteSheet;

import splashjs.render.animation.ScaleTransitionRenderer;
import splashjs.render.animation.FadeTransitionRenderer;
import splashjs.render.animation.CircularTransitionRenderer;
import splashjs.render.animation.RotationTransitionRenderer;
import splashjs.render.animation.TranslateTransitionRenderer;
import splashjs.render.animation.SpriteSheetRenderer;

public class RendererCreator implements IRendererCreator {

	public IRenderer createRenderer(Class clazz, IEventDispatcher renderObject) {
		IRenderer renderer = null;
		
		if(clazz == Global.class)
			renderer = new GlobalRenderer(renderObject);
		else if(clazz == Application.class)
			renderer = new ApplicationRenderer(renderObject);
		else if(clazz == StageOwner.class) 
			renderer = new StageOwnerRenderer(renderObject);
		else if(clazz == Stage.class)
			renderer = new StageRenderer(renderObject);
		else if(clazz == Scene.class)
			renderer = new SceneRenderer(renderObject);
		else if(clazz == Sprite.class) 
			renderer = new SpriteRenderer(renderObject);
		else if(clazz == MovieClip.class) 
			renderer = new MovieClipRenderer(renderObject);
		else if(clazz == Image.class) 
			renderer = new ImageRenderer(renderObject);
		else if(clazz == Line.class)
			renderer = new LineRenderer(renderObject);
		else if(clazz == Circle.class)
			renderer = new CircleRenderer(renderObject);
		else if(clazz == Label.class) 
			renderer = new LabelRenderer(renderObject);
		else if(clazz == Button.class) 
			renderer = new ButtonRenderer(renderObject);
		else if(clazz == Tree.class) 
			renderer = new TreeRenderer(renderObject);
		else if(clazz == StaticText.class) 
			renderer = new StaticTextRenderer(renderObject);
		else if(clazz == InputText.class) 
			renderer = new InputTextRenderer(renderObject);
		else if(clazz == FileReference.class) 
			renderer = new FileReferenceRenderer(renderObject);
		else if(clazz == URLLoader.class) 
			renderer = new URLLoaderRenderer(renderObject);
		else if(clazz == Resource.class) 
			renderer = new ResourceRenderer(renderObject);
		else if(clazz == ResourceLoader.class) 
			renderer = new ResourceLoaderRenderer(renderObject);
		else if(clazz == Sound.class) 
			renderer = new SoundRenderer(renderObject);
		else if(clazz == Video.class) 
			renderer = new VideoRenderer(renderObject);
		else if(clazz == Camera.class) 
			renderer = new CameraRenderer(renderObject);
		else if(clazz == List.class) 
			renderer = new ListRenderer(renderObject);
		else if(clazz == ByteArray.class) 
			renderer = new ByteArrayRenderer(renderObject);
		else if(clazz == FadeTransition.class) 
			renderer = new FadeTransitionRenderer(renderObject);
		else if(clazz == ScaleTransition.class) 
			renderer = new ScaleTransitionRenderer(renderObject);
		else if(clazz == CircularTransition.class) 
			renderer = new CircularTransitionRenderer(renderObject);
		else if(clazz == RotationTransition.class) 
			renderer = new RotationTransitionRenderer(renderObject);
		else if(clazz == TranslateTransition.class) 
			renderer = new TranslateTransitionRenderer(renderObject);
		else if(clazz == SpriteSheet.class) 
			renderer = new SpriteSheetRenderer(renderObject);
		/*
		
		else if(clazz == Rectangle.class)
			renderer = new RectangleRenderer(renderObject);
		else if(clazz == Image.class)
			renderer = new ImageRenderer(renderObject);
		
		
		else if(clazz == Sound.class) 
			renderer = new SoundRenderer(renderObject);
		else if(clazz == Video.class) 
			renderer = new VideoRenderer(renderObject);
		else if(clazz == SimpleButton.class) 
			renderer = new SimpleButtonRenderer(renderObject);
		
		else if(clazz == Label.class) 
			renderer = new LabelRenderer(renderObject);
		
		else if(clazz == TextInput.class) 
			renderer = new TextInputRenderer(renderObject);
		else if(clazz == TextArea.class) 
			renderer = new TextAreaRenderer(renderObject);
		else if(clazz == RadioButton.class) 
			renderer = new RadioButtonRenderer(renderObject);
		else if(clazz == List.class) 
			renderer = new ListRenderer(renderObject);
		*/
		
		return renderer;
	}
	
}

