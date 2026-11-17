import { describe, beforeEach, test, expect } from "vitest";
import Accommodation from "../accommodation.ts";

describe("Accommodation", () => {
  let accommodation: Accommodation;
  beforeEach(() => {
    accommodation = new Accommodation("Hotel Lago", 1000);
    void accommodation;
  });

  describe("Accommodation name", () => {
    test("should set name correctly", () => {
      expect(accommodation.name).toBe("Hotel Lago");
    });

    test("Poner otro nombre valido", () => {
      const nombreEsp = "Resort del Parque";
      accommodation.name = nombreEsp;

      expect(accommodation.name).toBe(nombreEsp);
    });
    
    test("nombre vacio", () => {
      expect(() => {
        accommodation.name = "";
      }).toThrow(Error);
    });

    test("nombre con un espacio", () => {
      expect(() => {
        accommodation.name = " ";
      }).toThrow(Error);
    });


  });

  describe("Accommodation cost", () => {
    test("costo valido", () => {
      expect(accommodation.cost).toBe(1000);
    });

    test("Poner otro costo valido", () => {
      accommodation.cost = 0;
      
      expect(accommodation.cost).toBe(0);
    });

    test("costo negativo", () => {
      expect(() => {
        accommodation.cost = -1;
      }).toThrow(Error);
    });

    test("costo no numerico", () => {
      expect(() => {
        accommodation.cost = "hola";
      }).toThrow(Error);
    });
  });
});
