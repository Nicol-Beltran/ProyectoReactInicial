
function Navbar(){

    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Menu ejemplo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Item1</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Item2</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Item3</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Item4</a>
        </li>
           <div class="container-fluid">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
      </ul>
   
    </div>
  </div>
</nav>



        </>
    )
}

export default Navbar