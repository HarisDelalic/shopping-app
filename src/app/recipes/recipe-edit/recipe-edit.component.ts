import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipe: Recipe;

  constructor(private route: ActivatedRoute,
              private recipesService: RecipeService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: Params) => {
      this.recipe = params.get('id') ? this.recipesService.getRecipe(+params.get('id')) : null;
    });
  }

}
