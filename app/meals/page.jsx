import Link from "next/link";
import { Suspense, use } from "react";
import classes from "./page.module.css";
import { MealGrid } from "../components/meals/meal.grid";
import { getMeals } from "@/lib/meals";

const Meals = ({ meals }) => {
  return <MealGrid meals={meals} />;
};

const MealsPage = () => {
  const meals = use(getMeals());

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cullToAction}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>

      <main className={classes.main}>
        <Suspense
          fallback={<h1 className={classes.loading}>Loading meals...</h1>}
        >
          <Meals meals={meals} />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
