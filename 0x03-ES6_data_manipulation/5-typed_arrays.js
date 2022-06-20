export default function createInt8TypedArray(length, postion, value) {
    const buffer = new ArrayBuffer(length);
    const view = new DataView(buffer, 0);
    if (position > length -1 throw Error('Position outside range');
	view.setInt8(postion, value);
	return view;
       }
    
