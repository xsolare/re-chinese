import type { IGlossaryContent } from '#/types/glossary';
// import type { AxiosInstance } from 'axios';
import { glossary } from '../mock/glossary';

///                                                                                 //

export const GlossaryApi = () => ({
  // instance: AxiosInstance

  async getPost(id: string): Promise<IGlossaryContent> {
    // const { data } = await instance.get<IGlossaryItem>('/hieroglyph/pinyin/' + pinyin, {});

    return new Promise<IGlossaryContent>((r) =>
      r(glossary.find((f) => f.id === id) as IGlossaryContent)
    );
  }
});
