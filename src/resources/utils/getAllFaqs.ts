import fs from 'fs'
import matter from 'gray-matter'
import regExp from './regExp'
import { type FaqsData, type Question } from '../types/faqs'

const faqsPath = `${process.cwd()}/src/resources/data/faqs/`
const availeableCategories = ['general', 'tecnico', 'administrativo']

const getAllFaqs = async () => {
  const rawAllCategories = await fs.promises.readdir(faqsPath, 'utf-8')
  const allCategories = rawAllCategories.sort((a, b) => availeableCategories.indexOf(a) - availeableCategories.indexOf(b))

  const allFaqs: FaqsData[] = await Promise.all(allCategories.map(async (currentCategory, categoryIndex) => {
    const rawAllFiles = await fs.promises.readdir(`${faqsPath}/${currentCategory}`, 'utf-8')
    const allFiles: Question[] = await Promise.all(rawAllFiles.map(async (currentFile, fileIndex) => {
      const file = await fs.promises.readFile(`${faqsPath}/${currentCategory}/${currentFile}`, 'utf-8')
      const { content, data } = matter(file)

      return {
        id: fileIndex + 1,
        category: data.category,
        title: data.title,
        sortTitle: data.sortTitle,
        content,
        path: {
          full: `/faqs?category=${regExp(data.category)}&question=${regExp(data.sortTitle)}`,
          category: regExp(data.category),
          question: regExp(data.sortTitle),
        },
      }
    }))

    return {
      id: categoryIndex + 1,
      category: allFiles[0].category,
      questions: allFiles,
    }
  }))

  return allFaqs
}
export default getAllFaqs
