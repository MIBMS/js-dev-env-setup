import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', ()=>{
    it('Should pass', ()=>{
        expect(true).to.equal(true);
    });
});

describe('index.html', ()=>{
    it('Should say hello', (done)=>{
        const index = fs.readFileSync('./src/index.html', "utf-8");
        jsdom.env(index, function(err, window){
            const p = window.document.getElementsByTagName('p')[0];
            expect(p.innerHTML).to.equal('Hello world');
            done();
            window.close();
        });
    })
});