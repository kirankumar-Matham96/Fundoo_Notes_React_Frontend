import React from 'react';

export const info = () =>
{
  return (
    // <form>
    //   <Selection>
    //     <option>logout</option>
    //   </Selection>
    // </form>
    <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
  <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li><a href="#">HTML</a></li>
    <li><a href="#">CSS</a></li>
    <li><a href="#">JavaScript</a></li>
  </ul>
</div>
  )
}