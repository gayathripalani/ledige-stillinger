import React from 'react';
import { render } from '@testing-library/react';
import getAd from './controller/adController';


test('Invalid Page number for fetch request', async () => {
let errorMessage="";
try{
const ads= await getAd("n");
const a=ads.toString()

}
catch(err){
errorMessage=err.toString();
}
expect((errorMessage)).toBe("SyntaxError: Unexpected token B in JSON at position 0");
});


test('Valid Page number for fetch request', async () => {

const ads= await getAd("1");
expect((typeof ads)).toBe("object");
});
