import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';



export class DishdetailComponent implements OnInit {

  @Input()
  dish: Dish;

constructor(){}
ngOnInit(){}
}