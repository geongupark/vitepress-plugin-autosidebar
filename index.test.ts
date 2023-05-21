import { getSidebar } from './index';

describe('getSidebar', () => {
  it('returns the correct sidebar items', async () => {
    // given
    const rootPath = __dirname;
    const directoryPath = '';
    
    // when
    const result = await getSidebar(rootPath, directoryPath);

    // then
    expect(result).toEqual([
      { text: 'README', link: 'README' },
    ]);
  });

  it('handles empty directory', async () => {
    // given
    const rootPath = __dirname;
    const directoryPath = '';
    const excludeFileName = ['README'];
    
    // when
    const result = await getSidebar(rootPath, directoryPath, excludeFileName);

    // then
    expect(result).toEqual([]);
  });
});
