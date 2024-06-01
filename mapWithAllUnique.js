/**
 * Реализовать структуру, поддерживающую следующие операции:
 * 1. put(key, value)
 * 2. get(key)
 * 3. remove(key)
 * 4. isAllUnique() - возвращает true, если никакие два ключа не имеют два одинаковых значения
 */

class MapWithAllUnique {
  constructor() {
    this.map = new Map();
    this.valuesCount = new Map();
  }

  put(key, value) {
    this.map.set(key, value);
    this.valuesCount.set(value, (this.valuesCount.get(value) ?? 0) + 1);
  }

  get(key) {
    return this.map.get(key);
  }

  remove(key) {
    const valuesKey = map.get(key);

    this.map.delete(key);

    const valuesValue = this.valuesCount.get(valuesKey);

    if (valuesValue > 1) {
      this.valuesCount.set(valuesKey, valuesValue - 1);
    } else {
      this.valuesCount.delete(valuesKey);
    }
  }

  isAllUnique() {
    return this.valuesCount.size === this.map.size;
  }
}

const map = new MapWithAllUnique();

const arr1 = [1];
const arr2 = [2];
const arr2_2 = [2];
const arr3 = [3];
map.put(arr1, 1);
map.put(arr2, 2);
map.put(arr2_2, 3);
map.put(arr3, 3);
console.log("g ->", map.get(arr1)); // 1
console.log("g ->", map.get(arr2)); // 2
console.log("g ->", map.get(arr3)); // 3
map.remove(arr1);
map.remove(arr3);
console.log(map.isAllUnique()); // true
