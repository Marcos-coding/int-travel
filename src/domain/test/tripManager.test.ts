import { describe, beforeEach, test, expect } from "vitest";
import TripManager from "../tripManager.ts";
import City from "../city.ts";
import Accommodation from "../accommodation.ts";

function createCity(name: string): City {
  let aco = new Accommodation("Hotel Lago", 1000);

  return new City(
    name,
    "TestCountry",
    new Date("2023-05-01"),
    new Date("2023-05-04"),
    "Notas",
    aco
  );
}

describe("TripManager", () => {
  let manager: TripManager;
  let city1 = createCity("Montevideo");
  let city2 = createCity("Artigas");
  let city3 = createCity("Salto");

  beforeEach(() => {
    manager = new TripManager();
  });

  test("get cities", () => {
    expect(manager.getAllCities()).toEqual([]);
  });

  test("add city", () => {
    manager.addCity(city1);
    manager.addCity(city2);
    expect(manager.getAllCities().length).toBe(2);
  })

  test("find city by name", () => {
    manager.addCity(city1);
    manager.addCity(city2);
    manager.addCity(city3);

    expect(manager.findCityByName("Montevideo")).toBe(city1);
  });

  test("find city by name returns null if not found", () => {
    expect(manager.findCityByName("NonExistentCity")).toBeNull();
  });
});
