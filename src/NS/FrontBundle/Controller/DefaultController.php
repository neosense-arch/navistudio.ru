<?php

namespace NS\FrontBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('NSFrontBundle:Default:index.html.twig', array('name' => $name));
    }
}
