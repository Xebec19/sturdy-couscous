import { EllipsisPipe } from './ellipsis.pipe';

describe('EllipsisPipe', () => {
  it('create an ellipsis pipe', () => {
    const pipe = new EllipsisPipe();
    expect(pipe).toBeTruthy();
  });
describe('Pipe:ellipsis',() => {
  it('pipe should splice and append ellipsis to long titles',() => {
    let ellipsisPipe = new EllipsisPipe();
    expect(ellipsisPipe.transform('abcdefjhijklmnopqrstuvwxyz',4)).toEqual('abcd...')
  })
})
});
