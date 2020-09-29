import nock from 'nock'
import { getRecipes } from './index'

test('API fetches recipes from server', () => {
  nock(/localhost/)
    .get('/api/recipes')
    .reply(200, {recipes: [{ id: 1, name:'Caramelised Pork & Garlic Rice'}]})

  return getRecipes()
    .then(recipes => {
      console.log(recipes)
      expect(recipes.length).toBe(1)
      expect(recipes[0].id).toBe(1)
    })
})