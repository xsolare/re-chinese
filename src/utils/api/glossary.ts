import type { IGlossaryContent } from '#/types/glossary'
import type { AxiosInstance } from 'axios'
import { glossary } from '#/utils/mock/glossary'

///                                                                                 //

export const GlossaryApi = (instance: AxiosInstance) => ({
  async getPost(id: string): Promise<IGlossaryContent> {
    return new Promise<IGlossaryContent>((r) =>
      r(glossary.find((f) => f.id === id) as IGlossaryContent)
    )
  },

  async notImplemented(): Promise<unknown> {
    const data = await instance.get<unknown>('/')
    return data
  }
})
