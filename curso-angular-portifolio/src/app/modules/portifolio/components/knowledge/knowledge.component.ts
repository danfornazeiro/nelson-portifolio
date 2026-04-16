import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public knowledgeArray = signal<IKnowledge[]>([
    {
      src: 'assets/icons/html5.svg',
      alt: 'HTML5'
    },
    {
      src: 'assets/icons/sass.svg',
      alt: 'Sass'
    },
    {
      src: 'assets/icons/angular.svg',
      alt: 'Angular'
    },
    {
      src: 'assets/icons/react.svg',
      alt: 'React'
    },
    {
      src: 'assets/icons/java.svg',
      alt: 'Java'
    }
  ]);
}
