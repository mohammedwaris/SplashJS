package splashjs.utils.desktop;

import java.util.Arrays;



public class ByteArray implements IDesktopByteArray {
/*
	private byte bytes[] = new byte[0];
	private int position = 0;
	
	public ByteArray() {
	}
	
	public byte[] getBytes() {
		return this.bytes;
	}
	
	public void setBytes(byte bytes[]) {
		this.bytes = bytes;
		this.position = 0;
	}

	public int getPosition() {
		return this.position;
	}
	
	public int getLength() {
		int length = this.bytes.length;		
		return length;
	}
	
	public void clear() {
		this.bytes = new byte[0];
		this.position = 0;
	}
	
	public boolean readBoolean() {
		boolean value = false;
		byte byteValue = bytes[position++];
		if(byteValue != 0)
			value = true;
		return value;
	}
	
	public int readByte() {
		int value = 0;
		byte byteValue = bytes[position++];
		value = byteValue;
		return value;
	}
	
	public short readShort() {
		boolean valid = false;
		byte b1 = bytes[position++];
		byte b2 = bytes[position++];
		if((b1 >= 0 && b1 <= 255) && (b2 >= 0 && b2 <= 255)) {
			valid = true;
		}
		if(valid == false){
			//throw new java.io.IOException();
		}
		short value = (short)((b1 << 8) | b2);
		return value;
	}
	
	public int readInt() throws java.io.IOException {
		boolean valid = false;
		byte b1 = bytes[position++];
		byte b2 = bytes[position++];
		byte b3 = bytes[position++];
		byte b4 = bytes[position++];
		if((b1 >= 0 && b1 <= 255) && (b2 >= 0 && b2 <= 255) && (b3 >= 0 && b3 <= 255) && (b4 >= 0 && b4 <= 255)) {
			valid = true;
		}
		if(valid == false){
			throw new java.io.IOException();
		}
		int value = (b1 << 24) | (b2 << 16) + (b3 << 8) + b4;
		return value;
	}
	
	public long readLong() {
		boolean valid = false;
		byte b1 = bytes[position++];
		byte b2 = bytes[position++];
		byte b3 = bytes[position++];
		byte b4 = bytes[position++];
		byte b5 = bytes[position++];
		byte b6 = bytes[position++];
		byte b7 = bytes[position++];
		byte b8 = bytes[position++];
		if((b1 >= 0 && b1 <= 255) && (b2 >= 0 && b2 <= 255) && (b3 >= 0 && b3 <= 255) && (b4 >= 0 && b4 <= 255) &&
		   (b5 >= 0 && b5 <= 255) && (b6 >= 0 && b6 <= 255) && (b7 >= 0 && b7 <= 255) && (b8 >= 0 && b8 <= 255)) {
			valid = true;
		}
		if(valid == false){
			//throw new java.io.IOException();
		}
		long value = ((long)b1 << 56) + ((long)b2 << 48) + ((long)b3 << 40) + ((long)b4 << 32) + ((long)b5 << 24) + ((long)b6 << 16) + ((long)b7 << 8) + b8;
		return value;
	}
	
	public float readFloat() throws java.io.IOException {
		int intValue = readInt();
		float value = Float.intBitsToFloat(intValue);
		return value;
	}
	
	public double readDouble() {
		long longValue = readLong();
		double value = Double.longBitsToDouble(longValue);
		return value;
	}
	
		
	
	public void readBytes(IByteArray byteArray, int offset, int length) {
		byte inBytes[] = Arrays.copyOfRange(this.bytes, offset, length);
		((IDesktopByteArray)byteArray).setBytes(inBytes);
	}
	
	public void writeBytes(IByteArray byteArray, int offset, int length) {
		
	}*/
}