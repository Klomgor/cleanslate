import type { Unit } from '../../../constants/units'
import { defaultMeal } from '../../../models/log'
import type { CommonItem } from '../types'

const defaultOnDelete = (id?: string) => {}

const defaultOnUpdate = (
  id: string | null,
  unit: Unit | null,
  amount: number | null
) => undefined

export const createDefaultItem = (
  enablePlanning: boolean,
  unit?: Unit
): CommonItem => {
  return {
    alias: null,
    amount: null,
    barcode: null,
    basicFood: null,
    calories: null,
    category: null,
    childRecipe: null,
    consumed: !enablePlanning,
    createdAt: null,
    data: null,
    food: null,
    group: null,
    id: '',
    meal: defaultMeal,
    name: '',
    onDelete: defaultOnDelete,
    onUpdate: defaultOnUpdate,
    profile: null,
    protein: null,
    recipe: null,
    src: '',
    type: 'log',
    unit: unit || 'GRAM',
  }
}
