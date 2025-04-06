import { Injectable } from '@angular/core';
import { Review } from '../models/review.model';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  getReviews(): Review[] {
    return [
      {
        name: 'Ana Souza',
        comment: 'O melhor café que já experimentei! Atendimento incrível.',
        rating: 5,
        date: '2024-04-05',
      },
      {
        name: 'Carlos Mendes',
        comment: 'Ambiente muito aconchegante, ótimo para reuniões.',
        rating: 4,
        date: '2024-04-02',
      },
      {
        name: 'Julia Lima',
        comment: 'Bom café, mas achei um pouco caro.',
        rating: 4,
        date: '2024-03-28',
      },
      {
        name: 'Carla Maria',
        comment: 'Atedimento muito bom! Café excelente!',
        rating: 5,
        date: '2025-03-05',
      },
    ];
  }
}
