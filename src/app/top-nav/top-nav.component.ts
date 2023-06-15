import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  ngOnInit(): void {
    const menuBtn = document.querySelector('.hamburger');
	  const mobileMenu = document.querySelector('.mobile-nav');

	  menuBtn?.addEventListener('click', function () {
		  menuBtn.classList.toggle('is-active');
		  mobileMenu?.classList.toggle('is-active');
	  });
  }
  
}
