import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title = 'My Qoutes App';
  quotes:Quote [] = [
    new Quote (1, 'Mike', 'Success and Failure', 'Success is not final; failure is not fatal: it is the courage to continue that counts.', 'Winston Churchill',  new Date(2022,4,9),0,0),
    new Quote (2, 'Gabriel', 'Rules and Regulations', 'Play by the rules, but be ferocious.', 'Phil Knight',  new Date(2022,4,10),0,0),
    new Quote (3, 'Ruth', 'Business and Opportunities', 'Business opportunities are like buses, there’s always another one coming.', 'Richard Branson',  new Date(2022,4,11),0,0),
    new Quote (4, 'Denis', 'Life and Opportunities', 'You only have to do a few things right in your life so long as you don’t do too many things wrong.', 'Warren Buffet',  new Date(2022,4,13),0,0),
    new Quote (5, 'Dan', 'Success and People', 'Success usually comes to those who are too busy to be looking for it.', 'Henry Thoreau',  new Date(2022,4,14),0,0),
    new Quote (6, 'Cetrin', 'Will and Ideas', 'There’s no shortage of remarkable ideas, what’s missing is the will to execute them.', 'Seth Godin',  new Date(2022,4,15),0,0),
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
