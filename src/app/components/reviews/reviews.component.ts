import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Review } from '../../core/models/review.model';
import { ReviewService } from '../../core/services/review.service';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] = [];

  constructor(private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.reviews = this.reviewService.getReviews();
  }
}
