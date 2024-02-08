import { Component, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-50projects50days';

  panels = document.querySelectorAll('.panel')

  ngAfterViewInit() {
    const panels = document.querySelectorAll('.panel');

    panels.forEach(panel => {
      panel.addEventListener('click', () => {
        const wasActive = panel.classList.contains('active');
        this.removeActiveClass();
        if (!wasActive) {
          panel.classList.add('active');
        }
      });
    });
  }

  removeActiveClass() {
    const panels = document.querySelectorAll('.panel');
    panels.forEach(x => {
      x.classList.remove('active');
    });
  }

  /*panels.forEach(panel => {
      panel.addEventListener('click', () => {
          wasActive = panel.classList.contains('active')
          removeActiveClass()
          if (!wasActive)
              panel.classList.add('active')
      })
  })

  function removeActiveClass() {
      panels.forEach(x => {
          x.classList.remove('active')
      })
  }*/
}
